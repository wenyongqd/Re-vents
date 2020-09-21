import React, { useState } from 'react';
import { Segment, Header, Button, FormField } from 'semantic-ui-react'
import cuid from 'cuid'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateEvent, createEvent } from '../eventAction';
import { Formik, Form, Field } from 'formik';

export default function EventForm({ match, history }) {
    const dispatch = useDispatch();
    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }
    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {
        selectedEvent ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(createEvent({
                ...values,
                id: cuid(),
                hostedBy: 'bob',
                attendees: [],
                hostPhotoURL: '/assets/user.png'
            }));
        history.push('/events')
    }
    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
            <Formik
                initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                    <Form className='ui form' onSubmit={handleSubmit}>
                    <FormField>
                        <Field name='title' placeholder='Event title' />
                    </FormField>
                    <Form.Field>
                        <input type="text" placeholder='Category' name='category'
                            value={values.category}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Description' name='description'
                            value={values.description}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='City' name='city'
                            value={values.city}
                            onChange={handleChange }
                        />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Venue' name='venue'
                            value={values.venue}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input type="date" placeholder='Date' name='date'
                            value={values.date}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Button type='submit' floated='right' positive content='Submit' />
                    <Button
                        as={Link} to='/events'
                        type='submit'
                        floated='right'
                        content='Cancel'
                    />
                </Form>
            </Formik>

        </Segment>
    )
}