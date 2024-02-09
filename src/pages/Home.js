import { ImageSlider, ImageCard } from "../components";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <ImageSlider className="bg-green" />

      <div className="flex justify-around mt-20">
        <Link to="test">
          <ImageCard
            imageSrc="test-tube.png"
            text="OUR TESTS"
            color="bg-green-700"
          />
        </Link>

        <Link to="online_test">
          <ImageCard
            imageSrc="book-a-test.png"
            text="BOOK A ONLINE TEST"
            color="bg-green-600"
          />
        </Link>
        <Link to="accreditation">
          <ImageCard
            imageSrc="report.png"
            text="ACCREDITATION"
            color="bg-green-500"
          />
        </Link>
        <Link to="lab_network">
          <ImageCard
            imageSrc="location.png"
            text="LABORATORY NETWORK"
            color="bg-green-400"
          />
        </Link>
      </div>

      <div className="mt-20">
        <p className="flex justify-center items-center text-5xl font-bold text-green-800">
          Who We Are
        </p>

        <div className="flex mx-auto max-w-3xl px-4">
          <p className="text-center font-mono text-slate-500 mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sit quibusdam rem, rerum ullam optio ex tenetur? Et facilis, iste
            sequi possimus laudantium sit iure ut, officiis minima beatae sed
            vero! Nobis dolorum, atque animi distinctio deserunt sunt quod
            temporibus, mollitia natus illo quo deleniti expedita suscipit
            eligendi earum id. Ut officiis recusandae facilis cupiditate eius
            laborum enim quo? In voluptatum voluptas ducimus aliquam quaerat
            molestias quo id natus obcaecati expedita minima necessitatibus
            inventore, quidem ipsa perspiciatis animi voluptates nemo quis
            doloremque alias sint amet, sit adipisci officia? Iste nobis ex qui
            sapiente dolore placeat numquam obcaecati et sequi quibusdam!
          </p>
        </div>
      </div>

      <div>
        
      </div>



    </div>
  );
};
