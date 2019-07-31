import { combineReducers} from 'redux';
import { RECEIVE_HISTORY, RECEIVE_PROJECTS, RECEIVE_PROJECT, RECEIVE_DATAJOBS, RECEIVE_DATAJOB } from '../actions';
import { RECEIVE_PIPELINES, RECEIVE_PROJECT_PIPELINE } from '../actions/pipelines';

function projects(state= [], action){
	switch(action.type){
	case RECEIVE_PROJECTS:
		return action.projects;
	default:
		return state;
	}
}

function projectDetail(state={}, action){
	switch(action.type){
	case RECEIVE_PROJECT:
		return action.projectDetail;
	default:
		return state;
	}
}

function dataJobs(state = [], action){
	switch(action.type){
	case RECEIVE_DATAJOBS:
		return action.dataJobs;
	default:
		return state;
	}
}
function dataJobDetail(state={},action){
	switch(action.type){
	case RECEIVE_DATAJOB:
		return action.dataJobDetail;
	default :
		return state;
	}

}

function buildHistory(state={}, action){
	switch(action.type){
	case RECEIVE_HISTORY:
		return action.jobHistory
	default:
		return state
	}
}

function projectPipeLines(state=[],action){
	switch(action.type){
		case RECEIVE_PIPELINES:
			return action.pipeLines
		default:
			return state;
	}
}

function projectPipeline(state={},action){
	switch(action.type){
		case RECEIVE_PROJECT_PIPELINE:
			return action.projectPipeline
			break;
		default:
			return state;
	}
}


const rootReducer = combineReducers({ projects,projectDetail,dataJobs,dataJobDetail,
									projectPipeLines, projectPipeline ,buildHistory });
export default rootReducer;
