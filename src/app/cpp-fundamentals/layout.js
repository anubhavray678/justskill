export default function CppFundamentalsLayout({ children }) {
  return (
    <section className="grid grid-flow-col">
      <div className="bg-gray-200 h-[100vh]">sidebar</div>
      {/* <div className="bg-white ">sidebar</div> */}
      {children}
    </section>
  );
}
