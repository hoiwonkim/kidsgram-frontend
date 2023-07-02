// ./pages/chats/index.tsx
/* import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="Chatting">
      <div className="divide-y-[1px] ">
        {[1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-sm  text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats; */

// ./pages/chats/index.tsx
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "components/layout";
import SocketClient from "components/SocketClient";

const Chats = () => {
  useEffect(() => {
    // 여기에 채팅 목록 페이지와 관련된 추가적인 로직을 작성합니다.
  }, []);

  return (
    <Layout title="🍎Apple Talking🍎" hasTabBar>
      <Head>
        <title>Chat</title>
      </Head>
      <SocketClient />
      <div className="divide-y-[1px] ">
        {[1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
              <img src="Steve Jebs.jpg" alt="프로필 이미지" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-gray-700">🍎Steve Jebs🍎</p>
                <p className="text-sm text-gray-500">
                  See you at the corner tomorrow at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="divide-y-[1px] ">
        {[1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
            <img src="Bruce Willis.jpg" alt="프로필 이미지" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-gray-700">🦲Bruce Willis🦲</p>
                <p className="text-sm text-gray-500">
                  See you at the infornt of New World on Monday at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="divide-y-[1px] ">
        {[1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
            <img src="Lady GaGa.jpg" alt="프로필 이미지" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-gray-700">🐞Lady Gaga🐞</p>
                <p className="text-sm text-gray-500">
                  See you at the city center on sunday at 9am!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="divide-y-[1px] ">
        {[1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
            <img src="Tom Holland.jpg" alt="프로필 이미지" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-gray-700">🕷️Tom Holland🕷️</p>
                <p className="text-sm text-gray-500">
                  What are you going to do on Friday at 12pm?
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="divide-y-[1px] ">
        {[1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
            <img src="KIM.jpg" alt="프로필 이미지" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-gray-700">👑HoiWon KIM👑</p>
                <p className="text-sm text-gray-500">
                🤴I am a king of the world!!!!🤴
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        /* CSS styles for the chat UI */
      `}</style>
    </Layout>
  );
};

export default Chats;







