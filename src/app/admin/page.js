import AccessRequest from "@/components/AccessRequest";
import AccessRequestList from "@/components/AccessRequestList";
import Notification from "@/components/Notification";
import NotificationList from "@/components/NotificationList";
import Postform from "@/components/PostForm";

export default function Admin() {
  return (
    <div className="flex p-4 w-screen min-h-screen gap-4 bg-gray-100">
      <div className="w-full min-h-full bg-white rounded-lg text-center p-4">
        <h2 className="text-lg font-semibold">Lav et post</h2>
        <Postform />
      </div>
      <div className="w-full min-h-full bg-white rounded-lg text-center p-4">
        <h2 className="text-lg font-semibold">Godkend brugere</h2>
        <AccessRequestList />
      </div>
      <div className="w-full min-h-full bg-white rounded-lg text-center p-4">
        <h2 className="text-lg font-semibold">Notifikationer</h2>
        <NotificationList />
      </div>
    </div>
  );
}
