import {
    Container,
    Form,
    Button,
    Row,
    Col
} from "react-bootstrap";

import { useForm } from "react-hook-form";
import { addData } from "../../../../../db";

export const FormBoot = () => {
    const initState = {
        email: "",
        categoria: "",
        value: "",
        date: "",
        description: ""
    };

    const onSubmit = (values) => {
        console.log("Values:::", values);
        addData({...values, email: '9novis9@gmail.com'}, 'budget_tb')
    };

    const onError = (error) => {
        console.log("ERROR:::", error);
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        defaultValues: initState
    });

    // useEffect(() => {
    //     const subscription = watch((value, { name, type }) => {
    //         console.log(">>", value, name, type);
    //     });

    //     return () => subscription.unsubscribe();
    // }, [watch]);

    return (
        <Container className="my-4">
            <Form onSubmit={handleSubmit(onSubmit, onError)}>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Control
                        type="categoria"
                        placeholder="Categoria"
                        {...register("categoria", { required: "Campo obrigatório" })}
                    />
                    {errors.categoria && (
                        <Form.Text className="text-danger">
                            {errors.categoria.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Valor da meta*</Form.Label>
                    <Form.Control
                        type="value"
                        placeholder="R$ 1.000,00"
                        {...register("value", { required: "Campo obrigatório" })}
                    />
                    {errors.value && (
                        <Form.Text className="text-danger">
                            {errors.value.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Período</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="DIA/MÊS/ANO"
                        {...register("date")}
                    />
                    {errors.date && (
                        <Form.Text className="text-danger">
                            {errors.date.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        type="description"
                        placeholder="DESCRIÇÃO SOBRE A META"
                        {...register("description")}
                    />
                    {errors.description && (
                        <Form.Text className="text-danger">
                            {errors.description.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

