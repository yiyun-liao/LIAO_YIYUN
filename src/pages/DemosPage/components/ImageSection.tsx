import type { Img } from "@/data/demos";

interface ImageSectionProps {
  image: Img;
}

export function ImageSection({ image }: ImageSectionProps) {
  return (
    <div className="flex flex-col m-auto max-w-[800px] w-full justify-center">
      <img
        src={image.url}
        alt=""
        className="w-full rounded-lg object-cover"
      />
      {image.source && (
        <span
          className="mt-2 text-[11px] text-mute text-right"
          dangerouslySetInnerHTML={{ __html: image.source }}
        />
      )}
    </div>
  );
}
