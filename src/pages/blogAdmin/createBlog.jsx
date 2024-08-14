import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import "./admin.css";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDb, storage } from "../../firebase/firebaseConfig"; // Ensure proper import of storage
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const CreateBlog = () => {
  const [blogs, setBlogs] = useState({
    title: "",
    description: "",
    category: "",
    content: "",
    time: Timestamp.now(),
  });
  const [thumbnail, setThumbnail] = useState(null); // Initialize as null
  const [text, setText] = useState("");
  console.log(text);
  const navigate = useNavigate();

  const addPost = async () => {
    if (
      !blogs.title ||
      !blogs.description ||
      !blogs.category ||
      !blogs.content ||
      !thumbnail
    ) {
      return toast.error("Please fill all fields");
    }
    await uploadImage();
  };

  const uploadImage = async () => {
    if (!thumbnail) {
      return;
    }
    const imageRef = ref(storage, `blogImage/${thumbnail.name}`);
    uploadBytes(imageRef, thumbnail)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          const productRef = collection(fireDb, "blogPost");
          try {
            addDoc(productRef, {
              ...blogs,
              thumbnail: url,
              time: Timestamp.now(),
              date: new Date().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }),
            });
            navigate("/dashboard");
            toast.success("Post added successfully");
          } catch (error) {
            toast.error("Error adding post");
            console.error("Error adding document: ", error);
          }
        });
      })
      .catch((error) => {
        toast.error("Error uploading image");
        console.error("Error uploading image: ", error);
      });
  };

  // create markup function
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className="container h-full mx-auto max-w-5xl py-6">
      <h1 className="text-accent font-bold text-4xl my-16">Create Blog</h1>
      {/* main content */}
      <div className="mb-4">
        {/* thumbnail */}
        {thumbnail && (
          <img
            className="w-full rounded-md mb-4"
            src={URL.createObjectURL(thumbnail)}
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
      {/* second title input */}
      <div className="mb-4">
        <input
          type="text"
          name="title"
          label="Enter Your Title"
          placeholder="Enter Your Title"
          className="shadow-lg outline-none w-full rounded-md p-2"
          value={blogs.title}
          onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
        />
      </div>
      {/* second description input */}
      <div className="mb-4">
        <input
          type="text"
          name="description"
          label="Enter Your description"
          placeholder="Enter Your description"
          className="shadow-lg outline-none w-full rounded-md p-2"
          value={blogs.description}
          onChange={(e) => setBlogs({ ...blogs, description: e.target.value })}
        />
      </div>
      {/* third category input */}
      <div className="mb-4">
        <input
          type="text"
          name="category"
          label="Enter Your Category"
          placeholder="Enter Your Category"
          className="shadow-lg outline-none w-full rounded-md p-2"
          value={blogs.category}
          onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
        />
      </div>
      {/* Editor */}
      <Editor
        apiKey="2llt4pt7yhoxdrne2mconfgvwidtq5y200m2k8whnh5o0hs3"
        onEditorChange={(newValue, editor) => {
          setBlogs({ ...blogs, content: newValue });
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
        <button
          onClick={addPost}
          className="bg-accent px-8 py-4 my-6 rounded-lg text-primary font-semibold"
        >
          Submit
        </button>
      </Link>
      {/* preview section */}
      <div className="">
        <h1 className="text-3xl">Preview</h1>
        <div className="content">
          <div
            className={`[&>h1]:ss:text-[32px] [&>h1]:xx:text-[20px] [&>h1]:font-bold [&>h1]:mb-2.5 [&>h2]:ss:text-[24px] [&>h2]:xx:text-[18.75px] [&>h2]:font-bold [&>h2]:mb-2.5 [&>h3]:text-[18.75px] [&>h3]:font-bold [&>h3]:mb-2.5 [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5 [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5 [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5 [&>p]:text-[16px] [&>p]:mb-1.5 [&>ul]:list-disc [&>ul]:mb-2 [&>ol]:list-decimal [&>ol]:mb-2 [&>li]:list-decimal [&>li]:mb-10 [&>img]:rounded-lg [&>img]:w-[100%]`}
            dangerouslySetInnerHTML={createMarkup(blogs.content)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
