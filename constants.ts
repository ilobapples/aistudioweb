import { Project, Memory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'mockingbird-cover',
    title: 'To Kill a Mockingbird',
    description: 'A comprehensive cover design exploration for Harper Lee’s classic novel, focusing on the symbolic weight of the mockingbird and the radley house.',
    fullContent: 'This project involved a deep dive into the narrative themes of innocence, justice, and childhood perspective. The design process began with raw charcoal sketches (ideation) to capture the gritty reality of the Great Depression era, moving through various digital drafts to find the perfect balance between abstraction and literal representation.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Jd0ybz4nmfj_i0TAQ-LRaL-ewqJ1HPR2',
    category: 'Book Cover Design',
    year: '2024',
    processImages: [
      { url: 'https://lh3.googleusercontent.com/d/1PZu1eVim_zpLm4-K51F3iQc_62vU42eF', label: 'Ideation & Rough Concepts' },
      { url: 'https://lh3.googleusercontent.com/d/1rOB3KtOYU4VNY4G_Su1M3pOCRD02YFsh', label: 'First Digital Draft' },
      { url: 'https://lh3.googleusercontent.com/d/1Jd0ybz4nmfj_i0TAQ-LRaL-ewqJ1HPR2', label: 'Final Artwork' },
      { url: 'https://lh3.googleusercontent.com/d/1BOIAxd0knkrQkyVtjeKmUgKBK6iefq9w', label: 'Hardcover Mockup' }
    ]
  },
  {
    id: 'creative-image-making',
    title: 'Creative Image Making',
    description: 'A comprehensive study on visual storytelling and image construction techniques.',
    fullContent: 'This scroll contains a curated collection of techniques, explorations, and finished works that define my approach to image making. From analog textures to digital manipulation, it explores the boundaries of the frame.',
    imageUrl: 'https://picsum.photos/seed/creative-image/1200/800',
    category: 'Process & Final Execution',
    year: '2024',
    pdfUrl: 'https://drive.google.com/file/d/175O699-khE8ibN2g6rdIXcV1sq-uxtTJ/preview'
  },
  {
    id: 'digital-dreams',
    title: 'Digital Dreams',
    description: 'An exploration of abstract forms in virtual space.',
    fullContent: 'This project began as a study of how light interacts with non-Euclidean geometry. Using a combination of custom shaders and procedural generation, I created a series of works that challenge the viewer\'s perception of depth and reality.',
    imageUrl: 'https://picsum.photos/seed/p1/800/600',
    category: 'Digital Art',
    year: '2023',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/4v9S1N6m9fS6vUq3xXQZfE'
  },
  {
    id: 'urban-echoes',
    title: 'Urban Echoes',
    description: 'Capturing the hidden rhythms of city life through illustration.',
    fullContent: 'Urban Echoes is an ongoing series of street-level illustrations. Each piece is drawn on-site, capturing the fleeting moments of connection and isolation in dense metropolitan environments.',
    imageUrl: 'https://picsum.photos/seed/p2/800/600',
    category: 'Illustration',
    year: '2024',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX8Ueb9WJR3oR'
  },
  {
    id: 'synth-waves',
    title: 'Synth Waves',
    description: 'Audio-visual experiments synced to electronic beats.',
    fullContent: 'A collaboration with electronic music producers to create responsive visual environments. The motion is driven by FFT analysis of the audio signal, creating a seamless fusion of sound and sight.',
    imageUrl: 'https://picsum.photos/seed/p3/800/600',
    category: 'Interactive',
    year: '2023',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/4cOdK2wGZSTM2Of9737qyN'
  }
];

export const NARRATIVE_STORY = [
  { id: 'narrative-1', url: 'https://lh3.googleusercontent.com/d/1e7xvkEspQCFnPck--_gQqnAkvQEh4yQx', caption: 'Step I' },
  { id: 'narrative-2', url: 'https://lh3.googleusercontent.com/d/1ZggYiil-nibHaJGQHz7Yp505nMIbj3ew', caption: 'Step II' },
  { id: 'narrative-3', url: 'https://lh3.googleusercontent.com/d/1c9QK2wE8WpcIgqRZ2EQF53TIWE9vnwrt', caption: 'Step III' },
  { id: 'narrative-4', url: 'https://lh3.googleusercontent.com/d/1wMSlGYWJiG4u2Q1RKS_u4TkvMU_NEguH', caption: 'Step IV' },
];

export const MEMORIES: Memory[] = [
  { id: 'm1', url: 'https://lh3.googleusercontent.com/d/1yqc2K8m-XGp8yTrBajsn6KKG9Pnaafpd', caption: 'Captured Moment 01' },
  { id: 'm2', url: 'https://lh3.googleusercontent.com/d/1Ww3TTIze36N3iwHUA5MhqTDyB22R29SM', caption: 'Captured Moment 02' },
  { id: 'm3', url: 'https://lh3.googleusercontent.com/d/1rTsEUF5pwGCLyJMej1djAaGkeVXOdlia', caption: 'Captured Moment 03' },
  { id: 'm4', url: 'https://lh3.googleusercontent.com/d/1zK3vWmM0QMWCiXOTeuHc7voYkfZTyfRq', caption: 'Captured Moment 04' },
  { id: 'm5', url: 'https://lh3.googleusercontent.com/d/1h8hPErptot-flKEWFtPcDgQ4Ws5hJr3N', caption: 'Captured Moment 05' },
  { id: 'm6', url: 'https://lh3.googleusercontent.com/d/1heqHJjTnH1oEQxDjhUTyjBwlUHGvcl-6', caption: 'Captured Moment 06' },
  { id: 'm7', url: 'https://lh3.googleusercontent.com/d/1hSJB9EOZJ0kn9I7b1UL9bgszIeWLZMbG', caption: 'Captured Moment 07' },
];

export const LANGUAGES = ["Kimaya", "കിമായ", "கிமாயா", "किमाया"];