import React from 'react'

export interface ChildProps {
	children: React.ReactNode
}

export interface LngParams {
	params: { lng: string }
}

export interface IDoctors {
	image: string
	firstName: string
	lastName: string
	specialization: string
}

export interface IBlog {
	title: string
	description: string
	image: string
}
