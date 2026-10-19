import { createRoot } from "react-dom/client";
import "./index.css";
import logo from "./assets/Background.svg";
import contain from "./assets/Container.png";
import svg from "./assets/SVG.svg";
import svg1 from "./assets/SVG (1).svg";
import contaier from "./assets/Container.svg";
import man from "./assets/man.png";
import svg2 from "./assets/SVG (2).svg";
import Group from "./assets/Group.svg";

createRoot(document.getElementById("root")).render(
  <>
    <header className="bg-[#F8F9FACC]">
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="logo flex items-center gap-1">
          <img src={logo} className="h-10 w-10" />
          <h1 className=" pb-3 font-['Poppins'] font-bold text-[20px] tracking-normal text-[#222222]">
            Gourmet Bistro
          </h1>
        </div>
        <nav className=" font-['Poppins'] flex gap-8 text-xs font-medium text-[#6B7280]">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Our Story</a>
          <a href="#">Gallery</a>
        </nav>
        <button className="rounded-full bg-[#FF6B35] px-4 py-2 text-xs font-['Poppins'] text-white">
          Book a Table
        </button>
      </div>
    </header>
    <section className="relative flex min-h-[921.59px] items-center font-['Poppins']">
      <img
        src={contain}
        alt="hero"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto flex w-full max-w-160 flex-col items-start gap-6 text-white">
        <span className="rounded-full bg-[#FF6B35]/20 px-4 py-2 text-xs font-bold tracking-wider text-[#FF6B35]">
          THE ART OF DINING
        </span>

        <h2 className="text-[64px] font-bold leading-snug">
          Elevated culinary <span className="text-[#FF6B35]">experiences</span>{" "}
          for every palate.
        </h2>

        <p className="max-w-130 text-lg text-[#E5E7EB]">
          Discover a symphony of flavors crafted with locally sourced
          ingredients and exceptional passion.
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-8 py-4 font-semibold">
            <img src={svg} className="h-5 w-5" />
            View Menu
          </button>
          <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md">
            <img src={svg1} className="h-5 w-5" />
            Book a Table
          </button>
        </div>

        <div className="flex items-center gap-4">
          <img src={contaier} className="h-10" />
          <p className="text-base text-[#E5E7EB]">
            <b className="text-white">4.9-5</b> from over 2,000+ happy diners
          </p>
        </div>
      </div>
    </section>
    <section className="bg-[#F8F9FACC] py-24 font-['Poppins']">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-20 px-6">
        <div className="relative">
          <div className="absolute -left-4 -top-4 size-24 rounded-2xl bg-[#FF6B35]/10"></div>

          <img
            src={man}
            alt="man"
            className="relative aspect-4/5 w-full rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-[#222222] px-8 py-6 shadow-xl">
            <h3 className="text-3xl font-bold text-white">15+</h3>
            <p className="text-[10px] tracking-widest text-gray-400">
              YEARS OF EXCELLENCE
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold leading-tight text-[#222222]">
            Crafting stories on every plate since{" "}
            <span className="text-[#FF6B35]">2008</span>.
          </h2>

          <p className="text-lg leading-7 text-gray-500">
            Gourmet Bistro was born from a simple vision: to create a space
            where culinary excellence meets genuine hospitality. Our journey
            began in a small kitchen with big dreams, focusing on the purity of
            ingredients and the joy of shared meals.
          </p>

          <p className="text-lg leading-7 text-gray-500">
            Today, we continue that legacy, blending traditional techniques with
            modern innovation to bring you a menu that celebrates the best of
            the season.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B35]/10">
                <img src={svg2} className="size-5" />
              </div>
              <div>
                <h4 className="font-['Poppins'] text-[#222222]">Fresh Harvest</h4>
                <p className="text-sm text-gray-500">
                  Daily sourced organic ingredients.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6B35]/10">
                <img src={Group} className="size-5" />
              </div>
              <div>
                <h4 className="font-['Poppins'] text-[#222222]">Expert Chefs</h4>
                <p className="text-sm text-gray-500">
                  Award-winning culinary team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>,
);
