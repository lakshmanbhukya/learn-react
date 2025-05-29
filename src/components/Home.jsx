import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card.jsx";

const content = [
  {
    title: "card-1",
    description:
      "React Bits Generator refers to tools and libraries that help streamline the creation of React components and related code. These generators aim to reduce boilerplate code and enforce consistency across projects..",
    footer: "Footer",
  },
  {
    title: "card-2",
    description:
      "React Bits Generator refers to tools and libraries that help streamline the creation of React components and related code. These generators aim to reduce boilerplate code and enforce consistency across projects..",
    footer: "Footer",
  },
  {
    title: "card-3",
    description:
      "React Bits Generator refers to tools and libraries that help streamline the creation of React components and related code. These generators aim to reduce boilerplate code and enforce consistency across projects..",
    footer: "Footer",
  },
  {
    title: "card-4",
    description:
      "React Bits Generator refers to tools and libraries that help streamline the creation of React components and related code. These generators aim to reduce boilerplate code and enforce consistency across projects..",
    footer: "Footer",
  },
  {
    title:"card-5",
    description:
      "React Bits Generator refers to tools and libraries that help streamline the creation of React components and related code. These generators aim to reduce boilerplate code and enforce consistency across projects..",
    footer: "Footer",
  },
  {
    title:"card-6",
    description:
      "React Bits Generator refers to tools and libraries that help streamline the creation of React components and related code. These generators aim to reduce boilerplate code and enforce consistency across projects..",
    footer: "Footer",
  },
];
export default function HomeSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-center items-center h-screen bg-slate-300">
          <h1 className="text-black font-bold text-7xl text-opacity-75">
            Welcome to the Home Page!
          </h1>
          <p className="text-black my-5 font-semibold text-xl text-opacity-70">
            Lorem ipsum dolor sit amet adipisicing elit. In, ducimus lakshman.
          </p>
          <div>
            <button type="button" className="mx-4">
              Click Me
            </button>
            <button type="button">Click Me</button>
          </div>
        </div>
      </motion.div>

      <div className="min-h-screen bg-slate-600 py-10 px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          ShadCn UI Components
        </h1>
        <p className="text-center text-white text-opacity-75 text-muted-foreground text-lg font-medium max-w-3xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum soluta hic? Omnis nulla molestiae praesentium cumque id odit
          veniam.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
          {content.map((item, index) => (
            <Card key={index} className="shadow-md min-h-[250px] bg-stone-300">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter>
                <p>{item.footer}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
