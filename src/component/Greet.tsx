type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 1 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name} this is my ${messageCount} typescript project`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
