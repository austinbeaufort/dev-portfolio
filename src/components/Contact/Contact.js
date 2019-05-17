import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './Contact.module.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Contact = () => {
    return (
        <div>
            <h6 className={styles.title}>Hello, it's Great to Meet You</h6>
            <div className={styles.iconContainer}>
                <Form action="mailto:austinbeaufort7@gmail.com" method="post" className={styles.form}>
                    <Label className={styles.label} for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Full name" />
                    <Label className={styles.label} for="phone">Phone</Label>
                    <Input type="text" name="phone" id="phone" placeholder="Phone" />
                    <Label className={styles.label} for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email Address" />
                    <Label className={styles.label} for="company">Company</Label>
                    <Input type="text" name="company" id="company" placeholder="Company/Organization" />
                    <Label className={styles.label} for="details">How can I help you?</Label>
                    <Input type="textarea" placeholder="let's talk" name="details" id="details" />
                    <Button className={styles.button} value="Send" type="submit">Submit</Button>
                </Form>
                <div className={styles.iconsContainer}>
                    <SocialIcon className={styles.icon} url="https://www.linkedin.com/in/austinbeaufort/" />
                    <SocialIcon className={styles.icon} url='https://github.com/austinbeaufort/' />
                    <SocialIcon className={styles.icon} url='https://medium.com/@austinbeaufort' />
                    <SocialIcon className={styles.icon} url='https://twitter.com/BeaufortAustin' />
                </div>
            </div>

        </div>
    )
}

export default Contact;