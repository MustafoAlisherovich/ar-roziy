import React from 'react'

export interface ChildProps {
	children: React.ReactNode
}

export interface LngParams {
	params: {
		lng: string
		slug: string
	}
}

export interface IDoctors {
	id: string
	image: { url: string }
	name: string
	direction: string
}

export interface IBlog {
	slug: string
	content: { html: string }
	title: string
	description: string
	image: { url: string }
	createdAt: string
}

export interface IService {
	slug: string
	title: string
	icon: { url: string; width: number; height: number }
	image: { url: string }
	content: { html: string }
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
