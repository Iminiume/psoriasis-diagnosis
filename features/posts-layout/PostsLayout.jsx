import Image from "@/components/image";
import Typography from "@/components/typography";
import React from "react";

function PostsLayout({ image, children }) {
  return (
    <div className="m-8 mx-auto max-w-7xl rounded-xl border border-cardBorderOp20 bg-cardBg100 p-8">
      <div className="mb-8 flex flex-col gap-6 lg:flex-row">
        <div className="order-2 flex flex-col justify-between lg:order-1">
          {children}
        </div>
        {image && (
          <div className="order-1 flex-shrink-0 lg:order-2">
            <Image
              src={image}
              alt="Post-Image"
              width={300}
              height={200}
              className="mx-auto rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostsLayout;
