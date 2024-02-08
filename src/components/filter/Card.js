import { BsFillBagFill } from "react-icons/bs";
import Link from "next/link";
const Card = ({ img, title, company, type, jobLink }) => {
  return (
    <>
      <section className="card rounded-lg hover:border-2 hover:border-violet-700">
        <img src={img} alt={title} className="card-img" />
        <div className=" text-center">
          <h3 className=" font-extrabold">{title}</h3>
          <div className="flex justify-between">
            <h3 className="font-bold">{company}</h3>
            <h3 className="font-bold">{type}</h3>
          </div>

          <section>
            <div className="flex justify-center">
              <Link
                href={jobLink}
                target="blank"
                className="bg-primary rounded-lg text-white  w-full cursor-pointer hover:bg-violet-700"
              >
                <button className="bg-primary rounded-lg pl-2 text-white pr-2 pt-2 pb-2 w-full cursor-pointer hover:bg-violet-700">
                  Apply
                </button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
