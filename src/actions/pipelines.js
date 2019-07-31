export const RECEIVE_PIPELINES = 'RECEIVE_PIPELINES';
export const RECEIVE_PROJECT_PIPELINE = "RECEIVE_PROJECT_PIPELINE";
import { apiUrl } from './secret.js';

function receivePipeLines(json){
	const pipeLines  = json;
	return {
		type: RECEIVE_PIPELINES,
		pipeLines
	}
}

export function fetchPipeLines(){
	return function(dispatch){
		const pipeLines = fetch(apiUrl+"/projectpipelines")
							.then(response=> response.json())
		return pipeLines.then(json=>dispatch(receivePipeLines(json)))
	}

}

function receiveProjectPipeline(json){
	const projectPipeline = json
	return {
		type: RECEIVE_PROJECT_PIPELINE,
		projectPipeline
	}
}
export function fetchProjectPipeline(pipeline){
	return function(dispatch){
		const pipeLine = fetch(apiUrl+"/projectpipelines/"+pipeline.id)
							.then(response=> response.json())
		return pipeLine.then(json=>dispatch(receiveProjectPipeline(json)))
	}
}
