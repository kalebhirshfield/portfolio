import { Box, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import ProjectCard from "../components/UI/ProjectCard";
import styles from "../styles/Projects.module.css";
import { getProjects } from "./api/projects";

import { seo } from "config";
import FadeIn from "@rcnoverwatcher/react-fade-in-react-18/lib/FadeIn";

const Projects = ({ projects }) => {
  const title = "Projects";
  const description = seo.description;

  return (
    <>
      <FadeIn>
        <NextSeo
          title={title}
          description={description}
          canonical={seo.canonical}
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
      </FadeIn>
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
