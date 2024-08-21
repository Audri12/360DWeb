import "./Explore.css";
const Explore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="cyber lg:container lg:mx-auto font-[Inter] font-semibold text-white text-end p-5 lg:p-20">
        <h3 className="text-[30px]">360D SOUL LTD</h3>
        <h1 className="text-[48px]">Cyber Security</h1>
        <p className="text-[16px]">
          A complete suite of CYBER SECURITY delivering consistent processes and
          SECURITY across your business
        </p>
        <button className="btn bg-white text-[24px] text-black mt-5">
          {" "}
          Explore CS
        </button>
      </div>
      <div className="infrastructure lg:container lg:mx-auto font-[Inter] font-semibold text-white p-5 lg:p-20">
        <h3 className="text-[30px]">360D SOUL LTD</h3>
        <h1 className="text-[48px]">INFRASTRUCTURE</h1>
        <p className="text-[16px]">
          An automated, secure platform for migrating enterprise workloads and
          building new cloud native apps
        </p>
        <button className="btn bg-white text-[24px] text-black mt-5">
          {" "}
          Explore CS
        </button>
      </div>
    </div>
  );
};

export default Explore;
