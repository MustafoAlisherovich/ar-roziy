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

export interface IService {
	id: number
	title: string
	icon: string
}

export interface ICard {
	title: string
	icon: string
}

export interface IContact {
	name: string
	email: string
	subject: string
	message: string
}

export interface ITestimonial {
	id: string
	name: string
	comment: string
	image: {
		url: string
	} | null
	localizations?: {
		image: {
			url: string
		} | null
	}[]
	createdAt: string
}
