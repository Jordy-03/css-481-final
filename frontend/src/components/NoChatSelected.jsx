{/*  
  This is the component that is displayed when no chat is
  selected. This is  all UI stuff.
*/}
const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* LOGO */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div>
              <h1>LOGO</h1>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Malarky!</h2>
        <p className="text-base-content/60">
          Select a conversation to start chatting :&#41;
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;