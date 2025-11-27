import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'hologic-dimensions-3000',
    category: 'system',
    title: 'Hologic Dimensions 3000',
    manufacturer: 'Hologic',
    condition: 'refurbished',
    modality: '3D Mammography',
    mainImage: 'https://images.unsplash.com/photo-1581093458791-9d42e72eb2c7?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581093458791-9d42e72eb2c7?w=800&q=80',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    ],
    description: `
      <p>The Hologic Dimensions 3D Mammography System represents the gold standard in breast imaging technology. This refurbished unit has been meticulously restored to like-new condition by our certified technicians.</p>
      <h3>Key Features</h3>
      <ul>
        <li>3D tomosynthesis imaging capability</li>
        <li>SmartCurve patient comfort technology</li>
        <li>Advanced image processing algorithms</li>
        <li>Seamless PACS integration</li>
        <li>FDA approved and ACR accredited</li>
      </ul>
      <p>Every refurbished system includes a comprehensive one-year parts and labor warranty, complete installation, and applications training for your staff.</p>
    `,
    specifications: [
      { label: 'Modality', value: '3D Mammography' },
      { label: 'Manufacturer', value: 'Hologic' },
      { label: 'System', value: 'Hologic Dimensions 3D Mammography System' },
      { label: 'Detector Type', value: 'Amorphous Silicon' },
      { label: 'Image Resolution', value: '70 microns' },
      { label: 'Power Requirements', value: '208-240V, 30A' },
    ],
    accessories: [
      'Compression paddles (multiple sizes)',
      'Face shields and positioning aids',
      'DICOM workstation',
      'Quality control phantoms',
      'User manuals and documentation',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'hologic-selenia-dimensions',
    category: 'system',
    title: 'Hologic Selenia Dimensions',
    manufacturer: 'Hologic',
    condition: 'refurbished',
    modality: '2D/3D Mammography',
    mainImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      'https://images.unsplash.com/photo-1581093458791-9d42e72eb2c7?w=800&q=80',
    ],
    description: `
      <p>The Hologic Selenia Dimensions system combines 2D and 3D mammography capabilities in one versatile platform. Ideal for facilities seeking to upgrade their imaging capabilities.</p>
      <ul>
        <li>Dual-mode 2D/3D imaging</li>
        <li>Excellent image quality</li>
        <li>Proven reliability</li>
      </ul>
    `,
    specifications: [
      { label: 'Modality', value: '2D/3D Mammography' },
      { label: 'Manufacturer', value: 'Hologic' },
      { label: 'Detector Type', value: 'Amorphous Silicon' },
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'fujifilm-aspire-hd',
    category: 'system',
    title: 'Fujifilm Aspire HD',
    manufacturer: 'Fujifilm',
    condition: 'refurbished',
    modality: 'Digital Mammography',
    mainImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    ],
    description: `
      <p>Fujifilm's Aspire HD offers exceptional image quality with lower dose requirements. Perfect for high-volume screening facilities.</p>
    `,
    specifications: [
      { label: 'Modality', value: 'Digital Mammography' },
      { label: 'Manufacturer', value: 'Fujifilm' },
    ],
  },
  {
    id: '4',
    slug: 'hologic-detector-panel',
    category: 'part',
    title: 'Hologic Detector Panel',
    manufacturer: 'Hologic',
    condition: 'new',
    partNumber: 'DET-3000-A',
    mainImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    ],
    description: `
      <p>Genuine Hologic detector panel. Brand new, factory sealed. Compatible with Dimensions and Selenia systems.</p>
      <ul>
        <li>Factory sealed and certified</li>
        <li>Full manufacturer warranty</li>
        <li>Ready to ship</li>
      </ul>
    `,
    specifications: [
      { label: 'Part Number', value: 'DET-3000-A' },
      { label: 'Condition', value: 'New' },
      { label: 'Manufacturer', value: 'Hologic' },
      { label: 'Compatibility', value: 'Dimensions, Selenia series' },
    ],
  },
  {
    id: '5',
    slug: 'x-ray-tube-assembly',
    category: 'part',
    title: 'X-Ray Tube Assembly',
    manufacturer: 'Hologic',
    condition: 'refurbished',
    partNumber: 'TUBE-500-R',
    mainImage: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    ],
    description: `
      <p>Refurbished X-ray tube assembly, fully tested and certified. 90-day warranty included.</p>
    `,
    specifications: [
      { label: 'Part Number', value: 'TUBE-500-R' },
      { label: 'Condition', value: 'Refurbished' },
      { label: 'Manufacturer', value: 'Hologic' },
    ],
  },
];
