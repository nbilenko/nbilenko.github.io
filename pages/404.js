export default function Custom404() {
  return (
    <div className="max-w-6xl mx-4 md:mx-20 md:my-10">
      <h1 className="text-4xl py-4 font-bold">404 - Page Not Found</h1>
      <div className="w-3/4 md:w-1/2 max-w-md">
        <img src={"/stuck.gif"} alt="page not found" />
      </div>
    </div>
  );
}
