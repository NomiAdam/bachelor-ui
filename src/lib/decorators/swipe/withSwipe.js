import React, {PureComponent} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: 999;
`;

const withSwipe = (Component) => class extends PureComponent {
    state = {
        left: 0,
        originalOffset: 0,
        velocity: 0,
        timeOfLastDragEvent: 0,
        touchStartX: 0,
        prevTouchX: 0,
        beingTouched: false,
        touchStartY: 0,
        isOpen: false,
    };

    componentDidUpdate(prevProps) {
        const {swipeOpen} = this.props;
        if (swipeOpen !== prevProps.swipeOpen) {
            this.setState({
                left: swipeOpen ? 100 : 0,
                isOpen: swipeOpen,
            })
        }
    };

    handleStateChange = () => {
        const {isOpen} = this.state;
        const {handleSwipeChange} = this.props;
        handleSwipeChange(isOpen);
    };

    handleStart = (clientX, clientY) => {
        this.setState({
            originalOffset: this.state.left,
            velocity: 0,
            timeOfLastDragEvent: Date.now(),
            touchStartX: clientX,
            touchStartY: clientY,
            beingTouched: true,
            intervalId: null
        });
    };

    isSwipeX = (clientY) => {
        const {touchStartY} = this.state;
        return Math.abs(touchStartY - clientY) < 5;
    };

    handleMove = (clientX) => {
        if (this.state.beingTouched) {
            const touchX = clientX;
            const currTime = Date.now();
            const elapsed = currTime - this.state.timeOfLastDragEvent;
            const velocity = 20 * (touchX - this.state.prevTouchX) / elapsed;
            let deltaX = touchX - this.state.touchStartX + this.state.originalOffset;
            if (deltaX < 0) {
                deltaX = 0;
            } else if (deltaX > 100) {
                deltaX = 100;
            }
            this.setState({
                left: deltaX,
                velocity,
                timeOfLastDragEvent: currTime,
                prevTouchX: touchX
            });
        }
    };

    handleEnd = () => {
        const {left} = this.state;
        let finalLeft = left;
        if (finalLeft < 50) {
            finalLeft = 0;
        } else if (finalLeft >= 50) {
            finalLeft = 100;
        }
        this.setState({
            velocity: this.state.velocity,
            touchStartX: 0,
            beingTouched: false,
            left: finalLeft,
            isOpen: finalLeft === 100,
        }, this.handleStateChange);
    };

    handleTouchStart = (touchStartEvent) => {
        this.handleStart(
            touchStartEvent.targetTouches[0].clientX,
            touchStartEvent.targetTouches[0].clientY,
        );
    };

    handleTouchMove = (touchMoveEvent) => {
        if (this.isSwipeX(touchMoveEvent.targetTouches[0].clientY)) {
            this.handleMove(touchMoveEvent.targetTouches[0].clientX);
        }
    };

    handleTouchEnd = () => {
        this.handleEnd();
    };

    handleClick = (left) => this.setState({
        left,
        isOpen: left === 100,
    }, this.handleStateChange);

    render() {
        const {left} = this.state;
        const {handleSwipeChange, swipeOpen, ...rest} = this.props;
        return (
            <StyledWrapper
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
            >
                <Component left={left} handleClick={this.handleClick} {...rest} />
            </StyledWrapper>
        );
    }
};

export default withSwipe;
