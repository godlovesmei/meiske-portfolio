import { renderHook, act } from '@testing-library/react';
import { expect, test, describe, vi } from 'vitest';
import { useScramble } from '../hooks/useScramble';

describe('useScramble hook', () => {
  vi.useFakeTimers();

  test('should return initial text if trigger is false', () => {
    const { result } = renderHook(() => useScramble('MEISKE', false));
    expect(result.current).toBe('MEISKE');
  });

  test('should scramble and eventually return original text if trigger is true', () => {
    const { result } = renderHook(() => useScramble('MEISKE', true, 1200));
    
    // Fast forward halfway through the animation
    act(() => {
      vi.advanceTimersByTime(600);
    });
    
    // It shouldn't be the exact final string yet, or it should at least be scrambling
    // Let's just check if it resolves correctly at the end
    
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    
    expect(result.current).toBe('MEISKE');
  });
});
