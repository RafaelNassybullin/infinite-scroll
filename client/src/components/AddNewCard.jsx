import styled from "styled-components";
import { Container } from "../styles/globalStyle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStart } from "../store/reducer";

export const AddNewCard = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    title: yup.string().required("is not valid"),
    description: yup.string().required(),
    image: yup.string().url().required(),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "Its just title",
      description: "Its just description again",
      image: "",
    },
    resolver: yupResolver(schema),
  });

  const submitData = (data) => {
    dispatch(addStart(data));
    window.location.replace("/")
  };

  return (
    <Container>
      <Wrapper>
        <Text colors={!errors.title}>
          {!errors.title ? "Title:" : "Title couldn't be empty..."}
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              colors={errors.title}
              value={value}
              placeholder="Type the title..."
              onFocus={(e) => e.target.select()}
              onChange={onChange}
            />
          )}
          name="title"
        />

        <Text colors={!errors.description}>
          {!errors.title ? "Description:" : "Description couldn't be empty..."}
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              colors={errors.description}
              value={value}
              placeholder="Type the description..."
              onFocus={(e) => e.target.select()}
              onChange={onChange}
            />
          )}
          name="description"
        />

        <Text colors={!errors.image}>
          {!errors.title ? "Image url:" : "Image url couldn't be empty..."}
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              colors={errors.image}
              value={value}
              placeholder="Paste the image url..."
              onFocus={(e) => e.target.select()}
              onChange={onChange}
            />
          )}
          name="image"
        />
        <Button onClick={handleSubmit(submitData)} type={"submit"}>
          Submit
        </Button>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background: #1f1f1f;
  outline: none;
  border: ${(props) =>
    props.colors ? "1px solid crimson" : "1px solid transparent"};
  height: 80px;
  color: white;
  font-size: 40px;
  padding: 30px;
  border-radius: 25px;
`;
const Button = styled.button`
  height: 80px;
  border-radius: 25px;
  background: crimson;
  font-size: 40px;
  outline: none;
  border: none;
  color: white;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Text = styled.p`
  color: ${(props) => (props.colors ? "white" : "crimson")};
  margin-top: 10px;
  margin-left: 15px;
  margin-bottom: 10px;
  font-size: 29px;
  font-family: sans-serif;
`;
