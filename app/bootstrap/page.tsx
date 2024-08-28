'use client';

import { useState } from "react";
import { Button, InputGroup, Navbar, OverlayTrigger, Row, Stack, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import OptionList from "../_lib/OptionList";
import { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

export default function Page() {
    const [value, setValue] = useState('');
    const [selectValue, setSelectValue] = useState<string | number | readonly string[] | undefined>(undefined);
    return (
        <Container>
            <Navbar>
                <Navbar.Brand>testing bootstrap</Navbar.Brand>
            </Navbar>
            <Form >
                <Stack gap={3}>
                    <Form.Group>
                        <Form.Label>Lokales Datum/Uhrzeit</Form.Label>
                        <Form.Control type='datetime-local' placeholder="datetime-local" value={value} onChange={(e) => setValue(e.target.value)} />
                        <Form.Label className=''>value</Form.Label>
                        <Form.Text className=''> [{value}]</Form.Text>
                    </Form.Group>
                    <InputGroup hasValidation={true} className=''>
                        <Form.Select value={selectValue} onChange={(e) => { setSelectValue(e.target.value) }} className="" isInvalid={!selectValue} isValid={!!selectValue}>
                            <option value=''>Choose a value</option>
                            <option value={'x1'}>1</option>
                            <option>2</option>
                            <option>3</option>
                            <OptionList list={[4, 5, 6]} getLabel={(x) => x.toString()} getValue={(x) => '#' + x.toString()} />
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>No value selected?!</Form.Control.Feedback>
                        <Form.Control.Feedback type='valid'>Fine!</Form.Control.Feedback>
                    </InputGroup>
                    <Form.Group>
                        <Form.Label >selectValue</Form.Label>
                        <Form.Text> [{selectValue}]</Form.Text>
                    </Form.Group>

                </Stack>
            </Form>

        </Container>
    )
}