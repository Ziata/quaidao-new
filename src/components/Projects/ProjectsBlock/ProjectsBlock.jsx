import { ButtonWhite } from "../../Buttons/Buttons";
import styles from "./ProjectsBlock.module.css";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { Animated } from "react-animated-css";
import { createBrowserHistory } from "history";

export const ProjectsBlock = (props) => {
  const { project, index } = props;
  const isVisibleRef = useRef();
  const isVisible = useIsVisible(isVisibleRef);
  const history = createBrowserHistory();
  return (
    <div
      className={
        index % 2 === 0
          ? styles.projects_block
          : styles.projects_block + " " + styles.projects_block_even
      }
      ref={isVisibleRef}>
      <div className='container'>
        <div className={styles.projects_block_main}>
          <Animated
            animationIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            animationInDuration={1000}
            animationInDelay={500}
            isVisible={isVisible}
            className={styles.projects_block_left}>
            <span>
              <img src={project.img} />
            </span>
          </Animated>
          <Animated
            animationIn='fadeInUp'
            animationInDuration={1000}
            animationInDelay={500}
            isVisible={isVisible}
            className={styles.projects_block_right}>
            <h4>{project.title}</h4>
            <div>{project.text}</div>
            <ButtonWhite
              text='Explore'
              styleSpan={{ width: "200px" }}
              onClick={
                project.link
                  ? () => {
                      history.push(project.link);
                    }
                  : null
              }
            />
          </Animated>
        </div>
      </div>
    </div>
  );
};
