// ./pages/chats/[id].tsx
/* import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";

let Messages = [{
  message: 'Hi, how are you selling them for?'
}]

let Messages2 = [{
  message: 'Hi, how are you selling them for?'
}]


const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="Steve">
      <div className="py-10 pb-16 px-4 space-y-4">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want $20,000" reversed />
        <Message message="Are you crazy? It is too expensive.." />
        <form className="fixed py-2 bg-white  bottom-0 inset-x-0">
          <div className="flex relative max-w-md items-center  w-full mx-auto">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail; */

// ./pages/chats/[id].tsx
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "components/layout";
import { NextPage } from 'next'

const Message = ({ message, reversed }) => (
  <div className={`p-3 m-2 rounded-lg shadow-lg ${reversed ? 'bg-blue-400 text-white ml-auto' : 'bg-gray-200 mr-auto'}`}>
    <p className={`text-sm ${reversed ? 'text-right' : 'text-left'}`}>
      {message}
    </p>
  </div>
);

const ChatDetail: NextPage = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      setMessages([...messages, inputRef.current.value]);
      inputRef.current.value = '';
    }
  }

  return (
    <Layout canGoBack title={"🍎Apple talik to friends🍎"}>
      <div className="py-10 pb-16 px-4 space-y-4 overflow-y-auto h-screen">
        {messages.map((message, index) => (
          <Message key={index} message={message} reversed={index % 2 === 0} />
        ))}
        <form className="fixed py-2 bg-white bottom-0 inset-x-0" onSubmit={handleSubmit}>
          <div className="flex relative max-w-md items-center w-full mx-auto">
            <input
              ref={inputRef}
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white animate-bounce">
                →
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;



