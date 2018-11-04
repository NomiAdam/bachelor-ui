import React, {PureComponent} from 'react';
import Container from '../../atoms/Container/index';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Step from './Step';
import { gt, length } from 'ramda';
import { mapIndexed } from 'ramda-extension';

const StyledStepContainer = styled.ul`
  counter-reset: step; 
  padding: 0;
  margin: 0;
  min-width: 350px;
`;

const renderStep = (handleClick, stepCount, step) => (label, index) => (
    <Step
        key={label}
        // +1 because we are indexing from zero
        handleClick={handleClick(index + 1)}
        stepCount={stepCount}
        label={label}
        isActive={gt(step, index)}
    />
);

const renderSteppersStep = (handleClick, stepCount, step) => mapIndexed(renderStep(handleClick, stepCount, step));


class Stepper extends PureComponent {
    handleStepClick = (step) => () => {
        const { handleClick } = this.props;
        handleClick(step);
    };

    render() {
        const { items, step } = this.props;
        const stepCount = length(items);
        return (
            <Container>
                <StyledStepContainer>
                    {renderSteppersStep(this.handleStepClick, stepCount, step)(items)}
                </StyledStepContainer>
            </Container>
        );
    }
}

Stepper.propTypes = {
    /**
     * Array of all stepping items, note that it should be ordered array
     */
    items: PropTypes.array,
    /**
     * Number representing current step
     */
    step: PropTypes.number.isRequired,
    /**
     * Function handler to handle click on step
     */
    handleClick: PropTypes.func,
};

Stepper.defaultProps = {
    items: [],
};

export default Stepper;
