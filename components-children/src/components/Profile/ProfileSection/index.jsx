import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function ProfileSection(props) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>Name: </span>
        {props.name}
        <button>Follow</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
				<div className={styles.links}>
        <div className={styles.links}>
          <LinkButton href={props.githubUrl}>GitHub</LinkButton>
          <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
          <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
        </div>
				</div>
      </ProfileSection>
    </div>
  )
}