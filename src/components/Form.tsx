
export default function Form() {
  const submitter = () => {
    console.log(`object`);
  };
  return (
    <div>
      <form onSubmit={submitter}></form>
    </div>
  );
}
