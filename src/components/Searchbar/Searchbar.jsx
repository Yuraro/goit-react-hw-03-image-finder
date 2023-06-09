import { Component } from 'react';
import { notification } from 'components/Notification/Notification';
import { FcCamera } from 'react-icons/fc';
import {
    Form,
    FormButton,
    FormInput,
    Header,
} from './Searchbar.styled';

class Searchbar extends Component {
    state = {
        value: '',
    };
    handleChange = ({ target: { value } }) => {
    this.setState({ value });
    };

    handleSubmit = e => {
    e.preventDefault();
        if (this.state.value === '') {
            notification(
        'The search input can not be empty. Please enter a search query'
        );
		return
}
	this.props.onSubmit(this.state.value.trim().toLowerCase());
    this.setState({ value: '' });
};

    render() {
    return (
        <Header>
        <Form type="submit" onSubmit={this.handleSubmit}>
            <FormButton>
                <FcCamera size="30"  />
            </FormButton>

        <FormInput
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
        />
        </Form>
        </Header>
    );
}
}

export default Searchbar;