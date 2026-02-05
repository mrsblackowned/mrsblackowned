import "./PolaroidGrid.css";

const photos = [
  { src: "/images/IMG_4524.jpeg", caption: "Pearl Elegance" },
  { src: "/images/IMG_4525.jpeg", caption: "Natural Profile" },
  { src: "/images/IMG_4526.jpeg", caption: "Romantic Curls" },
  { src: "/images/IMG_4527.jpeg", caption: "Floral Artistry" },
  { src: "/images/IMG_4528.jpeg", caption: "Intense Gaze" },
  { src: "/images/IMG_4529.jpeg", caption: "Cultural Statement" },
  { src: "/images/IMG_4530.jpeg", caption: "Glitter Drama" },
  { src: "/images/IMG_4531.jpeg", caption: "Classic Glamour" },
];

const rotations = [-4, 3, -2, 5, -3, 4, -5, 2];

export default function PolaroidGrid() {
  return (
    <section className="polaroid-grid">
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className="polaroid"
          style={{ "--rotation": `${rotations[i]}deg` }}
        >
          <div className="polaroid-inner">
            <img src={photo.src} alt={photo.caption} />
            <span className="polaroid-caption">{photo.caption}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
