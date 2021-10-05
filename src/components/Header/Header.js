import Container from 'components/Container';
import styles from './Header.module.scss';

const Header = ({ children }) => {
  console.log(children);
  return (
    <header className={styles.header}>
      <Container>{children[1]}</Container>
    </header>
  );
};

export default Header;
