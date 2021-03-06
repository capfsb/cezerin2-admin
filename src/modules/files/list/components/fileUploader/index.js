import React from 'react';
import Dropzone from 'react-dropzone';
import messages from 'lib/text';

import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import style from './style.css';

export default class MultiUploader extends React.Component {
	onDrop = files => {
		const form = new FormData();
		files.map(file => {
			form.append('file', file);
		});
		this.props.onUpload(form);
	};

	render() {
		const { uploading } = this.props;
		return (
			<div>
				<Dropzone
					onDrop={this.onDrop}
					multiple
					disableClick
					ref={node => {
						this.dropzone = node;
					}}
					style={{}}
					className={style.dropzone + (uploading ? ` ${style.uploading}` : '')}
					activeClassName={style.dropzoneActive}
					rejectClassName={style.dropzoneReject}
				>
					{({getRootProps,getInputProps}) => (
					  <div {...getRootProps()}>
					<input {...getInputProps()} />
					<div className={style.dropzoneEmpty}>
						{messages.help_dropHere}
						<FlatButton
							label={messages.chooseImage}
							className={style.button}
							onClick={() => {
								this.dropzone.open();
							}}
						/>
					</div>
					</div>
					)}
				</Dropzone>

				<Snackbar open={uploading} message={messages.messages_uploading} />
			</div>
		);
	}
}
