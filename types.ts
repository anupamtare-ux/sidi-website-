
export interface Program {
  title: string;
  duration: string;
  imageUrl: string;
  isNew?: boolean;
}

export interface FacultyMember {
  name: string;
  specialization: string;
  philosophy: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  outcome: string;
  imageUrl: string;
}

export interface StudentWork {
    id: number;
    category: 'Fashion' | 'Interiors' | 'Workshops' | 'Exhibitions';
    imageUrl: string;
    videoUrl?: string;
}
