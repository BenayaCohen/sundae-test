import { useState } from "react";
import {
    Form,
    Button,
    FormGroup,
    Popover,
    OverlayTrigger,
} from "react-bootstrap";
function SummeryForm(props) {
    const [check, setCheck] = useState(false);

    const popOver = (
        <Popover id="popover-basic">
            <Popover.contect>no ice cream well actualy be deliverd</Popover.contect>
        </Popover>
    );
    const checkboxLabel = (
        <span>
            I agrre to
            <OverlayTrigger placement="right" overlay={popOver}>

                <span style={{ color: "blue" }}>terms and conditions</span>
            </OverlayTrigger>
        </span>
    );
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
