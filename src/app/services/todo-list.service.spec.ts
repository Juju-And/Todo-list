import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListService = TestBed.get(TodoListService);
    expect(service).toBeTruthy();
  });
});
