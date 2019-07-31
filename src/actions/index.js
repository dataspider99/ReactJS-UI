export const RECEIVE_PROJECTS = 'RECEIVE_PORJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_DATAJOBS = 'RECEIVE_DATAJOBS';
export const RECEIVE_DATAJOB = 'RECEIVE_DATAJOB';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';
import {apiUrl} from './secret.js'

// this part is receiving data job history

function receiveHistory(json){
	const history = json;
	return {
		type: RECEIVE_HISTORY,
		jobHistory: history
	}
}

function fetchHistoryJson(job){
	return fetch(apiUrl+"/datajobs/op/"+job.id)
	.then(response=> response.json())
}

export function fetchJobHistory(job){
	return function(dispatch){
		return fetchHistoryJson(job)
		.then(json=> dispatch(receiveHistory(json)))
	}
}

// This is for receiving projects

function recieveProjects(json){
	const projects  = json;
	return {
		type: RECEIVE_PROJECTS,
		projects
	}
}
function fetchProjectsJson(){
	return fetch(apiUrl+"/projects")
		.then(response => response.json())
}

export function fetchProjects(){
	return function(dispatch){
		return fetchProjectsJson()
		.then(json => dispatch(recieveProjects(json)))
	}
}

// This is for receiving project detail

function recieveProject(json){
	const projectDetail = json;
	return {
		type: RECEIVE_PROJECT,
		projectDetail
	}
}
function fetchProjectJson(project){
	return fetch(apiUrl+"/projects/"+project.id)
	.then(response => response.json())
}

export function fetchProject(project){
	return function(dispatch){
		return fetchProjectJson(project)
		.then(json=> dispatch(recieveProject(json)))
	}
}

// this function is for receiving data jobs 

function receiveDataJobs(json){
	const dataJobs = json;
	return {
		type: RECEIVE_DATAJOBS,
		dataJobs
	}
}

function fetchDataJobsJson(){
	return fetch("http://localhost:8000/api/jobs")
	.then(response => response.json())
}

export function fetchDataJobs(){
	return function(dispatch){
		return fetchDataJobsJson().then(json=>dispatch(receiveDataJobs(json))) 
	}
}

// These function receive details of a Data Job
function receiveDataJob(json){
	const dataJobDetail = json;
	return {
		type: RECEIVE_DATAJOB,
		dataJobDetail
	}
}

function fetchDataJobJson(job){

	return fetch(apiUrl+"/jobs/"+job.id)
	.then(response => response.json())
	}

export function fetchDataJob(job){
	console.log(apiUrl+"/jobs/"+job.id)
	return function(dispatch){
		return fetchDataJobJson(job).then(json=>dispatch(receiveDataJob(json)))
	}
}
