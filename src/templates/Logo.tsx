// type ILogoProps = {
//   xl?: boolean;
// };

const Logo = () => {
  // const size = props.xl ? '44' : '32';
  // const fontStyle = props.xl
  //   ? 'font-semibold text-3xl'
  //   : 'font-semibold text-xl';

  return (
    <div className="w-40">
      <img src={`/assets/images/logo.png`} alt={'logo'} />
    </div>
  );
};

export { Logo };
