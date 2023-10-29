import { Box, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import ProjectCard from "../components/UI/ProjectCard";
import styles from "../styles/Projects.module.css";
import { getProjects } from "./api/projects";
import { motion } from "framer-motion";

import { seo } from "config";

const Projects = ({ projects }) => {
  const title = "Projects";
  const description = seo.description;

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NextSeo
          title={title}
          description={description}
          canonical={seo.canonical}
          openGraph={{
            title,
            description,
            images: [
              {
                url: `${seo.canonical}personalLogo.png`,
                width: "350px",
                height: "350px",
                alt: "my logo",
              },
            ],
          }}
        />
        <Box className={"text-center"}>
          <Text py="4" fontSize={["3xl", "4xl"]} fontWeight="700">
            My Projects
          </Text>
        </Box>
        <div className={styles.container}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.main>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { projects },
  };
}

export default Projects;
