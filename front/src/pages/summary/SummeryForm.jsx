import { useState } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
function SummeryForm(props) {
    const [check, setCheck] = useState(false);
    const checkboxLabel = (<span>I agrre to <span style={{ color: "blue" }}>terms and conditions</span></span>)
    return (
        <Form>
            <FormGroup controlId="terms and conditions">
                <Form.Check
                    type="checkbox"
                    checked={check}
                    onChange={(e) => setCheck(e.target.checked)}
                    label={checkboxLabel}
                />
            </FormGroup>
            <Button variant="primery" type="submit" disabled={!check}>
                confirm order
            </Button>
        </Form>
    );
}

export default SummeryForm;
