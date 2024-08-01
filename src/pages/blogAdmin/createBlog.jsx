import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import "./admin.css";
import { Link } from "react-router-dom";

const CreateBlog = () => {
  const [blogs, setBlogs] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [text, setText] = useState("");
  console.log(blogs);
  // create markup function
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div className="container h-full mx-auto max-w-5xl py-6">
      {/* main content */}
      <div className="mb-4">
        {/* thumbnail */}
        {thumbnail && (
          <img
            className="w-full rounded-md mb-4"
            src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
            alt="thumbnail"
          />
        )}
        {/* text */}
        <p className="text-secondary mb-2 font-semibold">Upload Thumbnail</p>
        {/* first thumbnail input */}
        <input
          type="file"
          label="upload thumbnail"
          className="shadow-lg placeholder-black w-full rounded-md pl-8 p-4"
          onChange={(e) => setThumbnail(e.target.files[0])}
        />
      </div>
      {/* second thumbnail input */}
      <div className="mb-4">
        <input
          type="text"
          name="title"
          label="Enter Your Title"
          placeholder="Enter Your Title"
          className="shadow-lg outline-none w-full rounded-md p-2 "
        />
      </div>
      {/* third thumbnail input */}
      <div className="mb-4">
        <input
          type="text"
          name="category"
          label="Enter Your Category"
          placeholder="Enter Your Category"
          className="shadow-lg outline-none w-full rounded-md p-2 "
        />
      </div>
      {/* Editor */}
      <Editor
        apiKey="bgnk85t8d876lhweju63i4v4k0rfjuqn85no8pr4b31n0l2t"
        onEditorChange={(newValue, editor) => {
          setBlogs({ blogs, content: newValue });
          setText(editor.getContent({ format: "text" }));
        }}
        onInit={(evt, editor) => {
          setText(editor.getContent({ format: "text" }));
        }}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "codesample",
            "help",
            "wordcount",
            "accordion",
            "image",
            "quickbars",
            "autoresize",
            "autosave",
            "directionality",
            "emoticons",
            "pagebrake",
            "importcss",
            "save",
          ],
          selector: ["textarea"],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          content_css: "/admin.css",
        }}
        initialValue="Welcome to TinyMCE!"
      />
      {/* Submit */}
      <Link>
        <button className="bg-accent px-8 py-4 my-6 rounded-lg text-primary font-semibold">
          Submit
        </button>
      </Link>
      {/* preview section */}
      <div className="">
        <h1 className="text-3xl">Preview</h1>
        <div className="content">
          <div
            className={`[&>h1]:ss:text-[32px] [&>h1]:xx:text-[20px] [&>h1]:font-bold [&>h1]:mb-2.5 [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5 [&>h3]:text-[18.75px] [&>h3]:font-bold [&>h3]:mb-2.5 [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5 [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5 [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5 [&>p]:text-[16px] [&>p]:mb-1.5 [&>ul]:list-disc [&>ul]:mb-2 [&>ol]:list-decimal [&>ol]:mb-2 [&>li]:list-decimal [&>li]:mb-10 [&>img]:rounded-lg [&>img]:w-[100%]`}
            dangerouslySetInnerHTML={createMarkup(blogs.content)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
