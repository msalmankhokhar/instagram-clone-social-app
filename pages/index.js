import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import StatusListItem from "@/components/StatusListItem";
import Profilepic from "@/components/Profilepic";
import Threedots from "@/components/AppIcons/Threedots";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="py-5 flex flex-col items-center w-full gap-3">
        <div id="feed" className="overflow-hidden flex flex-col gap-10">
          <div id="status-list" className="w-full flex gap-4">

            <StatusListItem />
            <StatusListItem />
            <StatusListItem />
            <StatusListItem />
            <StatusListItem />
            <StatusListItem />

          </div>

          <div id="feed-container" className="w-3/4">
            <div className="feed-post flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Profilepic h={30} y={30} img={`/geonews.jpg`}/>
                  <p className="text-center text-xs dark:text-white">Geo News</p>
                </div>
                <Threedots />
              </div>
              <div className="">
                <img src="/post_ali.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}