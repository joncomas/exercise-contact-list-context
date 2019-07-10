import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Modal extends React.Component {
	constructor() {
		super();
		this.state = {
			// Initialize your state
			showModal: false
		};
	}

	render() {
		const { item } = this.props;
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{ display: this.props.show ? "inline-block" : "none" }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Are you sure?</h5>
							{this.props.onClose ? (
								<button
									onClick={() => this.props.onClose()}
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							) : (
								""
							)}
						</div>
						<div className="modal-body">
							<p>
								Warning: do you want to delete &quot;
								{this.props.item.full_name}
								&quot;
							</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">
								Oh no!
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={() =>
									this.props.onConfirm("https://assets.breatheco.de/apis/fake/contact/" + item.id)
								}>
								Do it!
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	onConfirm: PropTypes.func,
	show: PropTypes.bool,
	item: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
export default withRouter(Modal);
