import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import blockchain from "../../../assets/icons/blockchain1.png";
import web from "../../../assets/icons/web1.png";
import phone from "../../../assets/icons/phone1.png";
import gadget from "../../../assets/icons/gadget1.png";
const Categories = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <div>
          <SectionTitle title=" Popular Tags" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
          <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={blockchain}
                alt="Shoes"
                className="rounded-xl h-[65px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Blockchain</h2>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={web} alt="Shoes" className="rounded-xl h-[65px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Web</h2>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={phone} alt="Shoes" className="rounded-xl h-[65px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Mobile</h2>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={gadget} alt="Shoes" className="rounded-xl h-[65px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Gadget</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
