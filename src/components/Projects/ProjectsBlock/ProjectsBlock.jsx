import { ButtonWhite } from "../../Buttons/Buttons";
import styles from "./ProjectsBlock.module.css";

export const ProjectsBlock = (props) => {
  const { project, index } = props;
  return (
    <div
      className={
        index % 2 === 0
          ? styles.projects_block
          : styles.projects_block + " " + styles.projects_block_even
      }>
      <div className='container'>
        <div className={styles.projects_block_main}>
          <div className={styles.projects_block_left}>
            <span>
              <img src={project.img} />
            </span>
          </div>
          <div className={styles.projects_block_right}>
            <h4>{project.title}</h4>
            <div>{project.text}</div>
            <ButtonWhite text='Explore' styleSpan={{ width: "200px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
