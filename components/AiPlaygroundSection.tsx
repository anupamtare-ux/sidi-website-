import { GoogleGenAI, Modality } from "@google/genai";
import React, { useState, useCallback } from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { UploadIcon } from './icons/UploadIcon';

const AiPlaygroundSection: React.FC = () => {
    const [originalImage, setOriginalImage] = useState<{ url: string; file: File } | null>(null);
    const [prompt, setPrompt] = useState<string>('');
    const [style, setStyle] = useState<string>('Photorealistic');
    const [mood, setMood] = useState<string>('Neutral');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const styles = ['Photorealistic', 'Artistic', 'Futuristic', 'Vintage', 'Minimalist', 'Surreal'];
    const moods = ['Neutral', 'Dramatic', 'Serene', 'Vibrant', 'Muted', 'Gloomy', 'Ethereal'];

    const blobToBase64 = (blob: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    resolve(reader.result.split(',')[1]);
                } else {
                    reject(new Error('Failed to convert blob to base64 string.'));
                }
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setOriginalImage({ url: URL.createObjectURL(file), file });
            setGeneratedImage(null);
            setError(null);
        }
    };
    
    const handleGenerate = async () => {
        if (!originalImage || !prompt) {
            setError('Please upload an image and enter a prompt.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const base64Data = await blobToBase64(originalImage.file);
            
            // Constructing a more nuanced prompt
            let finalPrompt = prompt;
            const styleInstruction = style !== 'Photorealistic' ? ` using a ${style.toLowerCase()} style` : '';
            const moodInstruction = mood !== 'Neutral' ? ` with a ${mood.toLowerCase()} mood` : '';
            if (styleInstruction || moodInstruction) {
                 finalPrompt = `${prompt},${styleInstruction}${moodInstruction}.`;
            }

            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: {
                    parts: [
                        { inlineData: { data: base64Data, mimeType: originalImage.file.type } },
                        { text: finalPrompt },
                    ],
                },
                config: {
                    responseModalities: [Modality.IMAGE],
                },
            });
            
            const part = response.candidates?.[0]?.content?.parts?.[0];
            if (part && part.inlineData) {
                const base64ImageBytes: string = part.inlineData.data;
                const imageUrl = `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`;
                setGeneratedImage(imageUrl);
            } else {
                setError('Could not generate image. The model may not have returned an image.');
            }
        } catch (e) {
            console.error(e);
            setError('An error occurred while generating the image. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const loadExample = async () => {
        setPrompt("Make this chair look like it's made of crystal and glowing with a soft blue light.");
        setStyle('Surreal');
        setMood('Ethereal');
        setGeneratedImage(null);
        setError(null);
        // Load image from local assets to avoid CORS issues.
        // Please add `example-chair.jpg` to your project's public folder.
        const imageUrl = '/example-chair.jpg';
        try {
            const response = await fetch(imageUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch local image: ${response.statusText}`);
            }
            const blob = await response.blob();
            const file = new File([blob], "example-chair.jpg", { type: blob.type });
            setOriginalImage({ url: URL.createObjectURL(file), file });
        } catch(e) {
            console.error("Failed to load example image", e);
            setError("Could not load the example image. Make sure 'example-chair.jpg' is in your public folder.");
        }
    };

    return (
        <section id="ai-lab" className="py-20 md:py-32 bg-sidi-black text-sidi-white scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-sidi-white">AI Design Playground</h2>
                    <p className="max-w-3xl mx-auto text-lg text-sidi-white/70 mt-4">
                        Experience the future of design. Upload an image, give our AI a creative prompt, and watch your ideas come to life.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Controls Column */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="text-lg font-semibold font-poppins mb-2 block">1. Upload Your Image</label>
                            <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors">
                                {originalImage ? (
                                    <img src={originalImage.url} alt="Uploaded preview" className="w-full h-full object-contain rounded-lg p-2" />
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400">
                                        <UploadIcon className="w-10 h-10 mb-3" />
                                        <p className="mb-2 text-sm">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs">PNG, JPG, or WEBP</p>
                                    </div>
                                )}
                                <input id="image-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleImageChange} />
                            </label>
                        </div>

                        <div>
                             <label htmlFor="prompt" className="text-lg font-semibold font-poppins mb-2 block">2. Describe Your Vision</label>
                             <textarea
                                id="prompt"
                                rows={3}
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g., 'Change the fabric to dark velvet' or 'Add futuristic glowing lines to the object'"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-sidi-orange focus:border-sidi-orange transition text-white placeholder-gray-500"
                            ></textarea>
                        </div>
                        
                        <div>
                            <label className="text-lg font-semibold font-poppins mb-2 block">3. Refine Style & Mood</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="style-select" className="sr-only">Style</label>
                                    <select
                                        id="style-select"
                                        value={style}
                                        onChange={(e) => setStyle(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-sidi-orange focus:border-sidi-orange transition text-white"
                                    >
                                        {styles.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="mood-select" className="sr-only">Mood</label>
                                    <select
                                        id="mood-select"
                                        value={mood}
                                        onChange={(e) => setMood(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-sidi-orange focus:border-sidi-orange transition text-white"
                                    >
                                        {moods.map(m => <option key={m} value={m}>{m}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                             <button
                                onClick={handleGenerate}
                                disabled={isLoading || !originalImage || !prompt}
                                className="w-full flex items-center justify-center gap-2 bg-sidi-orange text-white font-poppins px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            >
                                <SparklesIcon className="w-5 h-5" />
                                {isLoading ? 'Generating...' : 'Generate Image'}
                            </button>
                             <button
                                onClick={loadExample}
                                className="w-full sm:w-auto border-2 border-sidi-orange text-sidi-orange font-poppins px-8 py-3 rounded-lg hover:bg-sidi-orange hover:text-white transition-all duration-300"
                            >
                                Try an Example
                            </button>
                        </div>
                        {error && <p className="text-red-400 text-center">{error}</p>}
                    </div>

                    {/* Output Column */}
                    <div className="flex flex-col gap-6">
                         <label className="text-lg font-semibold font-poppins mb-2 block">4. See the Result</label>
                         <div className="w-full h-96 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700">
                            {isLoading && (
                                <div className="text-center text-gray-400 animate-pulse">
                                    <SparklesIcon className="w-12 h-12 mx-auto mb-2" />
                                    <p>AI is creating...</p>
                                </div>
                            )}
                            {!isLoading && generatedImage && (
                                <img src={generatedImage} alt="Generated result" className="w-full h-full object-contain rounded-lg p-2" />
                            )}
                            {!isLoading && !generatedImage && (
                                <div className="text-center text-gray-500 px-4">
                                    <p>Your AI-generated image will appear here.</p>
                                </div>
                            )}
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiPlaygroundSection;