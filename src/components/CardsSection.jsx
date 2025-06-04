import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
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
];

export default function CardSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: true,
          amount: 0.3,
          margin: "100px",
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <div className="max-h-[555px] bg-slate-600 py-10 px-6">
          <h1 className="text-3xl font-bold text-center text-white mb-4">
            ShadCn UI Components
          </h1>
          <p className="text-center text-white text-opacity-75 text-muted-foreground text-lg font-medium max-w-3xl mx-auto mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            laborum soluta hic? Omnis nulla molestiae praesentium cumque id odit
            veniam.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-9">
            {content.map((item, index) => (
              <div key={index} className="flex  justify-center">
                <Card className="text-xl font-semibold mb-6 text-center">
                  <CardHeader>
                    <CardTitle className="text-xl text-left">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-left">
                      {item.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-medium text-[16px] bg-lime-200 w-full py-2 rounded-sm hover:bg-purple-400 transition">
                      {item.footer}
                    </p>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
