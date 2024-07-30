import React, { useEffect, useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

const AddPost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("AI");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      category,
    };

    try {
      const response = await fetch("http://localhost:5000/save-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        // Reset form fields
        setTitle("");
        setContent("");
        setCategory("AI");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to save post");
    }
  };

  return (
    <div>
      <div className="w-full max-w-screen-lg p-8 bg-white rounded-lg mx-auto my-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold text-sm mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Title"
              className="w-full px-3 py-2 border rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}//When the input field's value changes (i.e., when the user types something), the onChange event is triggered.The function (e) => setTitle(e.target.value) is called with the event object e.
              required
              //e.target: Refers to the input field element.
              //e.target.value: Retrieves the new value that the user has entered in the input field.
              // setTitle(e.target.value): Updates the title state with the new value from the input field.
            />
          </div>

          <div className="mb-4">
            <label htmlFor="post" className="block text-gray-700 text-sm font-bold mb-2">
              Post
            </label>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
              Options
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="AI">AI</option>
              <option value="ML">ML</option>
              <option value="Web">Web</option>
            </select>
          </div>

          <div className="flex gap-4 mt-6">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
              Create Post
            </button>
            <button
              type="button"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={() => {
                setTitle("");
                setContent("");
                setCategory("AI");
              }}
            >
              Reset Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
